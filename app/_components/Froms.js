"use client";
import React, { useState } from "react";
import { createcompany } from "@/apiSubjects2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    familyName: "",
    email: "",
    phone: "",
    companyName: "",
    branchesNumber: "",
    terms: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "الاسم الأول مطلوب";
    if (!formData.familyName) newErrors.familyName = "اسم العائلة مطلوب";
    if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.companyName) newErrors.companyName = "اسم الشركة مطلوب";
    if (!formData.branchesNumber)
      newErrors.branchesNumber = "كم عدد الفروع مطلوب";
    if (!formData.terms) newErrors.terms = "يجب الموافقة على البنود والشروط";
    if (!formData.privacyPolicy)
      newErrors.privacyPolicy = "يجب الموافقة على سياسة الخصوصية";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      try {
        const response = await createcompany(formData);

        toast.success("تم إرسال النموذج بنجاح!");

        console.log("Response:", response);

        setFormData({
          firstName: "",
          familyName: "",
          email: "",
          phone: "",
          companyName: "",
          branchesNumber: "",
          terms: false,
          privacyPolicy: false,
        });
      } catch (error) {
        console.error(error);

        toast.error("حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <form
        className="bg-white p-6 rounded-lg shadow-2xl space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              الاسم الأول <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full bg-gray-100 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="familyName"
              className="block text-sm font-medium text-gray-700 text-right"
            >
              اسم العائلة <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="familyName"
              name="familyName"
              value={formData.familyName}
              onChange={handleChange}
              className={`mt-1 p-2 block w-full bg-gray-100 border ${
                errors.familyName ? "border-red-500" : "border-gray-300"
              } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
            />
            {errors.familyName && (
              <p className="text-red-500 text-sm">{errors.familyName}</p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            البريد الإلكتروني <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 p-2 block w-full bg-gray-100 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            رقم الهاتف <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="p-2 w-1/3 flex justify-center bg-gray-100 border border-gray-300 rounded-full text-black text-sm">
              Saudi Arabia
            </span>
            <div
              className={`flex items-center w-2/3 bg-gray-100 border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-full focus-within:ring focus-within:ring-blue-200`}
            >
              <span className="p-2 text-black">+966</span>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="flex-1 p-2 bg-transparent rounded-full text-black text-end focus:outline-none"
                placeholder="55XXXXXXX"
              />
            </div>
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            اسم الشركة <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`mt-1 p-2 block w-full bg-gray-100 border ${
              errors.companyName ? "border-red-500" : "border-gray-300"
            } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
          />
          {errors.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="branchesNumber"
            className="block text-sm font-medium text-gray-700 text-right"
          >
            كم عدد الفروع <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="branchesNumber"
            name="branchesNumber"
            value={formData.branchesNumber}
            onChange={handleChange}
            className={`mt-1 p-2 block w-full bg-gray-100 border ${
              errors.branchesNumber ? "border-red-500" : "border-gray-300"
            } rounded-full text-right text-black focus:ring focus:ring-blue-200`}
          />
          {errors.branchesNumber && (
            <p className="text-red-500 text-sm">{errors.branchesNumber}</p>
          )}
        </div>

        <div className="flex gap-2 justify-end">
          <label
            htmlFor="terms"
            className="ml-2 text-sm text-gray-700 text-right"
          >
            <span className="text-red-500">*</span>
            بتحديد هذا المربع، أؤكد أنني قرأت ووافقت على{" "}
            <Link href="/terms" className="text-blue-500 underline">
              البنود والشروط
            </Link>
          </label>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className={`mt-1 ${errors.terms ? "border-red-500" : ""}`}
          />
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

        <div className="flex gap-2 justify-end">
          <label
            htmlFor="privacyPolicy"
            className="ml-2 text-sm text-gray-700 text-right"
          >
            <span className="text-red-500">*</span>
            باستخدامك للموقع ، فإنك توافق على جمعنا لبيناتك الشخصية واستخدامها
            وتخزينها بالأسلوب المبين في{" "}
            <Link href="/privacy-policy" className="text-blue-500 underline">
              سياسة الخصوصية
            </Link>
          </label>

          <input
            type="checkbox"
            id="privacyPolicy"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            className={`mt-1 ${errors.privacyPolicy ? "border-red-500" : ""}`}
          />
        </div>
        {errors.privacyPolicy && (
          <p className="text-red-500 text-sm">{errors.privacyPolicy}</p>
        )}

        <button
          type="submit"
          className="w-full bg-primary-30 text-white py-2 px-4 rounded-full hover:bg-blue-900"
          disabled={loading}
        >
          {loading ? "جاري الإرسال..." : "إرسال"}
        </button>
      </form>

      <ToastContainer />
    </>
  );
};

export default Form;
