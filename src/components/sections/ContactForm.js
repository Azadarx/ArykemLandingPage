'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    enquiryType: 'Product Information',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend functionality - form is prepared for future integration
    alert('Contact form submission requires email service integration. Please use alternative contact methods or check back for updates.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="label text-[var(--charcoal)] block mb-2">
          NAME *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[var(--warm-white)] border border-[var(--soft-grey)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--botanical)] transition-colors"
        />
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className="label text-[var(--charcoal)] block mb-2">
          PROFESSIONAL / ORGANISATION
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--warm-white)] border border-[var(--soft-grey)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--botanical)] transition-colors"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label text-[var(--charcoal)] block mb-2">
          EMAIL *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[var(--warm-white)] border border-[var(--soft-grey)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--botanical)] transition-colors"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="label text-[var(--charcoal)] block mb-2">
          PHONE (OPTIONAL)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[var(--warm-white)] border border-[var(--soft-grey)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--botanical)] transition-colors"
        />
      </div>

      {/* Enquiry Type */}
      <div>
        <label htmlFor="enquiryType" className="label text-[var(--charcoal)] block mb-2">
          ENQUIRY TYPE *
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-[var(--warm-white)] border border-[var(--soft-grey)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--botanical)] transition-colors"
        >
          <option>Product Information</option>
          <option>Professional Enquiries</option>
          <option>Business Enquiries</option>
          <option>General Enquiries</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label text-[var(--charcoal)] block mb-2">
          MESSAGE *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-[var(--warm-white)] border border-[var(--soft-grey)] text-[var(--charcoal)] focus:outline-none focus:border-[var(--botanical)] transition-colors resize-none"
        />
      </div>

      {/* Notice */}
      <div className="p-4 bg-[var(--botanical)]/10 border-l-4 border-[var(--botanical)]">
        <p className="body-small text-[var(--charcoal)]">
          <strong>Note:</strong> Contact form submission requires email service integration. 
          This form is prepared for future connectivity.
        </p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-8 py-4 text-base font-medium transition-all duration-300 bg-[var(--botanical)] text-[var(--ivory)] hover:bg-[var(--botanical-dark)]"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
