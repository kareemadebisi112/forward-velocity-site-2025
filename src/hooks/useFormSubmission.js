import { useState } from 'react';
import { submitFormData, createSubmissionData } from '../services/apiService';

/**
 * Custom hook for handling form submissions with loading states and error handling
 * @param {Object} options - Configuration options
 * @returns {Object} - Submission state and functions
 */
export const useFormSubmission = (options = {}) => {
  const {
    onSuccess = () => {},
    onError = (error) => console.error('Submission error:', error),
    successMessage = "Thank you! Your submission has been received.",
    errorMessage = "Something went wrong. Please try again or contact us directly."
  } = options;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Submit form data
   * @param {string} intent - The intent type
   * @param {string} source - The source of the submission
   * @param {Object} attributes - Form field data
   * @param {Object} submissionOptions - Additional options
   */
  const submit = async (intent, source, attributes, submissionOptions = {}) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const submissionData = createSubmissionData(intent, source, attributes, submissionOptions);
      const response = await submitFormData(submissionData);
      
      setSubmitted(true);
      onSuccess(response);
      
      return response;
    } catch (err) {
      setError(err);
      onError(err);
      alert(errorMessage);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Reset submission state
   */
  const reset = () => {
    setIsSubmitting(false);
    setSubmitted(false);
    setError(null);
  };

  return {
    isSubmitting,
    submitted,
    error,
    submit,
    reset
  };
};

/**
 * Preset hook for newsletter submissions
 */
export const useNewsletterSubmission = (options = {}) => {
  return useFormSubmission({
    successMessage: "Welcome aboard! 🚀",
    ...options
  });
};

/**
 * Preset hook for project inquiry submissions
 */
export const useProjectInquirySubmission = (options = {}) => {
  return useFormSubmission({
    successMessage: "Thank you! We'll get back to you within 24 hours.",
    ...options
  });
};
