// API service for handling form submissions
const API_BASE_URL = "https://api.forward-velocity.com";

/**
 * Submit form data to the submissions endpoint
 * @param {Object} submissionData - The data to submit
 * @returns {Promise<Object>} - API response
 */
export const submitFormData = async (submissionData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/v1/submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submissionData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API submission error:", error);
    throw error;
  }
};

/**
 * Create submission data structure for different form types
 * @param {string} intent - The intent type (newsletter, project_inquiry, etc.)
 * @param {string} source - The source of the submission
 * @param {Object} attributes - Form field data
 * @param {Object} options - Additional options like consent, attribution
 * @returns {Object} - Formatted submission data
 */
export const createSubmissionData = (intent, source, attributes, options = {}) => {
  const {
    consent = {},
    attribution = {},
    customAttribution = {}
  } = options;

  // Auto-capture UTM parameters and attribution data
  const defaultAttribution = {
    utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
    utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
    referrer: document.referrer || '',
    page_url: window.location.href,
    user_agent: navigator.userAgent,
    ...customAttribution
  };

  // Default consent structure
  const defaultConsent = {
    timestamp: new Date().toISOString(),
    ip: "client_ip", // This would be set by your backend
    ...consent
  };

  // Create the submission data with fields at root level for Django compatibility
  const submissionData = {
    intent,
    source,
    // Flatten attributes to root level for Django serializer
    ...attributes,
    // Keep nested structure for complex data
    attributes: {
      ...attributes,
      timestamp: new Date().toISOString()
    },
    attribution: {
      ...defaultAttribution,
      ...attribution
    },
    consent: defaultConsent
  };

  // Validate required fields
  if (!intent) {
    throw new Error('Intent is required');
  }
  if (!source) {
    throw new Error('Source is required');
  }

  return submissionData;
};
