import React, { useState, useEffect } from 'react';
import ProductBreadcrumb from '../components/products/ProductBreadcrumb';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowDown
} from 'lucide-react';

const INQUIRY_TYPES = [
  'Hardware Product Inquiry',
  'Custom Hardware Development',
  'Linux / Yocto BSP Development',
  'Software Engineering',
  'Camera & Multimedia Integration',
  'Edge AI Development',
  'Technical Support',
  'Partnership / Business Inquiry',
  'Other'
];

const PRODUCT_PLATFORMS = [
  'RZ/G2L',
  'RZ/G2N',
  'RZ/V2L',
  'RZ/V2H',
  'Custom Hardware',
  'Not Sure Yet'
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Contact | AIEGX - Embedded & Edge AI Hardware';
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phoneNumber: '',
    country: '',
    inquiryType: '',
    productPlatform: '',
    projectDescription: ''
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: string }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact-us' }
  ];

  // Validation functions
  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters.';
        return '';
      case 'companyName':
        if (!value.trim()) return 'Company name is required.';
        return '';
      case 'businessEmail': {
        if (!value.trim()) return 'Business email is required.';
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid business email address.';
        return '';
      }
      case 'phoneNumber': {
        if (!value.trim()) return 'Phone number is required.';
        const phoneClean = value.replace(/[\s\-().+]/g, '');
        if (phoneClean.length < 7 || !/^\+?[0-9\s\-().]{7,25}$/.test(value.trim())) {
          return 'Please enter a valid phone number (minimum 7 digits).';
        }
        return '';
      }
      case 'country':
        if (!value.trim()) return 'Country is required.';
        return '';
      case 'inquiryType':
        if (!value) return 'Please select an inquiry type.';
        return '';
      case 'projectDescription':
        if (!value.trim()) return 'Project description is required.';
        if (value.trim().length < 15) return 'Please provide at least 15 characters describing your project.';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const validateAll = () => {
    const newErrors = {};
    const fieldsToValidate = [
      'fullName',
      'companyName',
      'businessEmail',
      'phoneNumber',
      'country',
      'inquiryType',
      'projectDescription'
    ];

    fieldsToValidate.forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });

    setErrors(newErrors);
    setTouched(
      fieldsToValidate.reduce((acc, curr) => ({ ...acc, [curr]: true }), {})
    );

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    const isValid = validateAll();
    if (!isValid) {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      // Backend integration endpoint
      const endpoint = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';

      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        payload.append(key, formData[key]);
      });

      const response = await fetch(endpoint, {
        method: 'POST',
        body: payload
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your inquiry has been submitted successfully. Our engineering team will review your requirements and respond shortly.'
        });
        setFormData({
          fullName: '',
          companyName: '',
          businessEmail: '',
          phoneNumber: '',
          country: '',
          inquiryType: '',
          productPlatform: '',
          projectDescription: ''
        });
        setTouched({});
        setErrors({});
      } else {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Submission failed with server status ${response.status}.`);
      }
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message:
          'Unable to submit inquiry automatically: The backend inquiry endpoint is not yet connected or is currently unavailable. Please reach out directly to our team at contact@aiegx.com with your project requirements.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToInquiryForm = () => {
    const el = document.getElementById('inquiry-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F3F8FD] dark:bg-[#0D1733] text-[#101B32] dark:text-[#F8FAFC] transition-colors duration-300">
      
      {/* ─── SECTION 1: HERO ──────────────────────────────────────────────── */}
      <section className="relative pt-[104px] pb-14 sm:pt-[124px] sm:pb-20 lg:pt-[136px] lg:pb-24 overflow-hidden border-b border-[#D8E5F3] dark:border-white/10 bg-gradient-to-b from-[#EAF5FF] via-[#F3F8FD] to-[#F3F8FD] dark:from-[#111F42] dark:via-[#0D1733] dark:to-[#0D1733]">
        {/* Subtle Ambient Decorative Lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#089EC2]/10 dark:bg-[#2DD4F0]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#1672E8]/10 dark:bg-[#1672E8]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ProductBreadcrumb items={breadcrumbItems} />

          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
            {/* Category / Page Identifier Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#17264A] border border-[#089EC2]/30 dark:border-[#2DD4F0]/30 text-xs font-mono font-bold tracking-wider uppercase text-[#089EC2] dark:text-[#2DD4F0] mb-5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Contact</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#101B32] dark:text-white leading-[1.18] mb-5">
              Let&apos;s Build Your Next Product
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#536987] dark:text-[#AAB6D0] font-normal leading-relaxed max-w-2xl mb-8">
              Have a project in mind or need help choosing the right hardware platform? Connect with our team to discuss your requirements and explore the right technology for your application.
            </p>

            {/* CTA Button */}
            <button
              type="button"
              onClick={scrollToInquiryForm}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#089EC2] to-[#1672E8] hover:from-[#0aa8cf] hover:to-[#1b7dfa] shadow-lg shadow-[#1672E8]/25 dark:shadow-cyan-950/40 hover:shadow-[#1672E8]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer active:scale-98"
            >
              <span>Send an Inquiry</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ─── SECTION 2: CONTACT INFORMATION ───────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Email */}
          <div className="bg-white dark:bg-[#142247] rounded-2xl border border-[#D8E5F3] dark:border-[#24355A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] dark:bg-[#1C2C55] text-[#1672E8] dark:text-[#2DD4F0] flex items-center justify-center mb-5 border border-[#D8E5F3]/60 dark:border-white/5">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#101B32] dark:text-white tracking-tight mb-2">
                Email
              </h2>
              <p className="text-xs sm:text-sm text-[#536987] dark:text-[#AAB6D0] mb-4">
                Reach out to our engineering and technical sales teams for consultation.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D8E5F3]/70 dark:border-white/10">
              <a
                href="mailto:contact@aiegx.com"
                className="font-semibold text-sm sm:text-base text-[#1672E8] dark:text-[#2DD4F0] hover:underline break-all inline-flex items-center gap-1.5"
              >
                contact@aiegx.com
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-white dark:bg-[#142247] rounded-2xl border border-[#D8E5F3] dark:border-[#24355A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] dark:bg-[#1C2C55] text-[#1672E8] dark:text-[#2DD4F0] flex items-center justify-center mb-5 border border-[#D8E5F3]/60 dark:border-white/5">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#101B32] dark:text-white tracking-tight mb-2">
                Phone
              </h2>
              <p className="text-xs sm:text-sm text-[#536987] dark:text-[#AAB6D0] mb-4">
                Speak directly with our technical representatives during business hours.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D8E5F3]/70 dark:border-white/10">
              <a
                href="tel:+18005550199"
                className="font-semibold text-sm sm:text-base text-[#1672E8] dark:text-[#2DD4F0] hover:underline inline-flex items-center gap-1.5"
              >
                +1 (800) 555-0199
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="bg-white dark:bg-[#142247] rounded-2xl border border-[#D8E5F3] dark:border-[#24355A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] dark:bg-[#1C2C55] text-[#1672E8] dark:text-[#2DD4F0] flex items-center justify-center mb-5 border border-[#D8E5F3]/60 dark:border-white/5">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#101B32] dark:text-white tracking-tight mb-2">
                Location
              </h2>
              <p className="text-xs sm:text-sm text-[#536987] dark:text-[#AAB6D0] mb-4">
                Global engineering laboratories and hardware design facilities.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D8E5F3]/70 dark:border-white/10">
              <span className="font-semibold text-sm text-[#101B32] dark:text-slate-200 block">
                Silicon Valley &amp; Global Engineering Centers
              </span>
            </div>
          </div>

          {/* Card 4: Business Hours */}
          <div className="bg-white dark:bg-[#142247] rounded-2xl border border-[#D8E5F3] dark:border-[#24355A] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] dark:bg-[#1C2C55] text-[#1672E8] dark:text-[#2DD4F0] flex items-center justify-center mb-5 border border-[#D8E5F3]/60 dark:border-white/5">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-[#101B32] dark:text-white tracking-tight mb-2">
                Business Hours
              </h2>
              <p className="text-xs sm:text-sm text-[#536987] dark:text-[#AAB6D0] mb-4">
                Our core hardware engineering and support availability schedule.
              </p>
            </div>
            <div className="pt-4 border-t border-[#D8E5F3]/70 dark:border-white/10">
              <span className="font-semibold text-sm text-[#101B32] dark:text-slate-200 block">
                Monday – Friday: 9:00 AM – 6:00 PM
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SECTION 3: TECHNICAL INQUIRY FORM ────────────────────────────── */}
      <section
        id="inquiry-form"
        className="py-12 sm:py-16 lg:py-20 border-t border-[#D8E5F3] dark:border-white/10 bg-white/50 dark:bg-[#0B132B]/50 backdrop-blur-xs scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101B32] dark:text-white tracking-tight mb-3">
              Tell Us About Your Project
            </h2>
            <p className="text-sm sm:text-base text-[#536987] dark:text-[#AAB6D0]">
              Share your requirements with our team, and we will get back to you.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white dark:bg-[#142247] rounded-3xl border border-[#D8E5F3] dark:border-[#24355A] p-6 sm:p-10 lg:p-12 shadow-xl">
            
            {/* Status Messages */}
            {submitStatus && (
              <div
                className={`mb-8 p-5 rounded-2xl flex items-start gap-3.5 border ${
                  submitStatus.type === 'success'
                    ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                    : 'bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'
                }`}
                role="alert"
              >
                {submitStatus.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                )}
                <div className="text-xs sm:text-sm leading-relaxed">
                  <p className="font-semibold mb-0.5">
                    {submitStatus.type === 'success' ? 'Inquiry Sent' : 'Submission Notice'}
                  </p>
                  <p>{submitStatus.message}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Full Name & Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 1. Full Name */}
                <div data-error={!!errors.fullName}>
                  <label
                    htmlFor="fullName"
                    className="block text-xs sm:text-sm font-semibold text-[#101B32] dark:text-slate-200 mb-2"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Alex Henderson"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F9FBFE] dark:bg-[#0D1733] border text-[#101B32] dark:text-white placeholder-[#8A9EB8] dark:placeholder-[#64748B] transition-colors focus:outline-none ${
                      errors.fullName && touched.fullName
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/30'
                        : 'border-[#D8E5F3] dark:border-[#24355A] focus:border-[#1672E8] focus:ring-2 focus:ring-[#1672E8]/20 dark:focus:ring-[#2DD4F0]/20'
                    }`}
                  />
                  {errors.fullName && touched.fullName && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* 2. Company Name */}
                <div data-error={!!errors.companyName}>
                  <label
                    htmlFor="companyName"
                    className="block text-xs sm:text-sm font-semibold text-[#101B32] dark:text-slate-200 mb-2"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Apex Robotics Inc."
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F9FBFE] dark:bg-[#0D1733] border text-[#101B32] dark:text-white placeholder-[#8A9EB8] dark:placeholder-[#64748B] transition-colors focus:outline-none ${
                      errors.companyName && touched.companyName
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/30'
                        : 'border-[#D8E5F3] dark:border-[#24355A] focus:border-[#1672E8] focus:ring-2 focus:ring-[#1672E8]/20 dark:focus:ring-[#2DD4F0]/20'
                    }`}
                  />
                  {errors.companyName && touched.companyName && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.companyName}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Row 2: Business Email & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 3. Business Email */}
                <div data-error={!!errors.businessEmail}>
                  <label
                    htmlFor="businessEmail"
                    className="block text-xs sm:text-sm font-semibold text-[#101B32] dark:text-slate-200 mb-2"
                  >
                    Business Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="businessEmail"
                    name="businessEmail"
                    value={formData.businessEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="alex@apexrobotics.com"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F9FBFE] dark:bg-[#0D1733] border text-[#101B32] dark:text-white placeholder-[#8A9EB8] dark:placeholder-[#64748B] transition-colors focus:outline-none ${
                      errors.businessEmail && touched.businessEmail
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/30'
                        : 'border-[#D8E5F3] dark:border-[#24355A] focus:border-[#1672E8] focus:ring-2 focus:ring-[#1672E8]/20 dark:focus:ring-[#2DD4F0]/20'
                    }`}
                  />
                  {errors.businessEmail && touched.businessEmail && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.businessEmail}</span>
                    </p>
                  )}
                </div>

                {/* 4. Phone Number */}
                <div data-error={!!errors.phoneNumber}>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs sm:text-sm font-semibold text-[#101B32] dark:text-slate-200 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F9FBFE] dark:bg-[#0D1733] border text-[#101B32] dark:text-white placeholder-[#8A9EB8] dark:placeholder-[#64748B] transition-colors focus:outline-none ${
                      errors.phoneNumber && touched.phoneNumber
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/30'
                        : 'border-[#D8E5F3] dark:border-[#24355A] focus:border-[#1672E8] focus:ring-2 focus:ring-[#1672E8]/20 dark:focus:ring-[#2DD4F0]/20'
                    }`}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Row 3: Country & Inquiry Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 5. Country */}
                <div data-error={!!errors.country}>
                  <label
                    htmlFor="country"
                    className="block text-xs sm:text-sm font-semibold text-[#101B32] dark:text-slate-200 mb-2"
                  >
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. United States, Germany, India"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F9FBFE] dark:bg-[#0D1733] border text-[#101B32] dark:text-white placeholder-[#8A9EB8] dark:placeholder-[#64748B] transition-colors focus:outline-none ${
                      errors.country && touched.country
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/30'
                        : 'border-[#D8E5F3] dark:border-[#24355A] focus:border-[#1672E8] focus:ring-2 focus:ring-[#1672E8]/20 dark:focus:ring-[#2DD4F0]/20'
                    }`}
                  />
                  {errors.country && touched.country && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.country}</span>
                    </p>
                  )}
                </div>

                {/* 6. Inquiry Type */}
                <div data-error={!!errors.inquiryType}>
                  <label
                    htmlFor="inquiryType"
                    className="block text-xs sm:text-sm font-semibold text-[#101B32] dark:text-slate-200 mb-2"
                  >
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F9FBFE] dark:bg-[#0D1733] border text-[#101B32] dark:text-white transition-colors focus:outline-none cursor-pointer ${
                      errors.inquiryType && touched.inquiryType
                        ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/30'
                        : 'border-[#D8E5F3] dark:border-[#24355A] focus:border-[#1672E8] focus:ring-2 focus:ring-[#1672E8]/20 dark:focus:ring-[#2DD4F0]/20'
                    }`}
                  >
                    <option value="">Select an Inquiry Type</option>
                    {INQUIRY_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.inquiryType && touched.inquiryType && (
                    <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.inquiryType}</span>
                    </p>
                  )}
                </div>

              </div>

              {/* Row 4: Product / Platform */}
              <div>
                <label
                  htmlFor="productPlatform"
                  className="block text-xs sm:text-sm font-semibold text-[#101B32] dark:text-slate-200 mb-2"
                >
                  Product / Platform <span className="text-xs font-normal text-[#536987] dark:text-[#AAB6D0]">(Optional)</span>
                </label>
                <select
                  id="productPlatform"
                  name="productPlatform"
                  value={formData.productPlatform}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-[#F9FBFE] dark:bg-[#0D1733] border border-[#D8E5F3] dark:border-[#24355A] text-[#101B32] dark:text-white transition-colors focus:outline-none focus:border-[#1672E8] focus:ring-2 focus:ring-[#1672E8]/20 dark:focus:ring-[#2DD4F0]/20 cursor-pointer"
                >
                  <option value="">Select a Platform (Optional)</option>
                  {PRODUCT_PLATFORMS.map((plat) => (
                    <option key={plat} value={plat}>
                      {plat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 5: Project Description */}
              <div data-error={!!errors.projectDescription}>
                <label
                  htmlFor="projectDescription"
                  className="block text-xs sm:text-sm font-semibold text-[#101B32] dark:text-slate-200 mb-2"
                >
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  rows={5}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell us about your target application, compute requirements, thermal envelope, production timelines, or expected volume..."
                  className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F9FBFE] dark:bg-[#0D1733] border text-[#101B32] dark:text-white placeholder-[#8A9EB8] dark:placeholder-[#64748B] transition-colors focus:outline-none resize-y ${
                    errors.projectDescription && touched.projectDescription
                      ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 dark:focus:ring-red-900/30'
                      : 'border-[#D8E5F3] dark:border-[#24355A] focus:border-[#1672E8] focus:ring-2 focus:ring-[#1672E8]/20 dark:focus:ring-[#2DD4F0]/20'
                  }`}
                />
                {errors.projectDescription && touched.projectDescription && (
                  <p className="text-red-500 dark:text-red-400 text-xs mt-1.5 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.projectDescription}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#089EC2] to-[#1672E8] hover:from-[#0aa8cf] hover:to-[#1b7dfa] shadow-lg shadow-[#1672E8]/25 hover:shadow-[#1672E8]/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
