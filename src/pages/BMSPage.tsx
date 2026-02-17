import React from "react";
import { Link } from "react-router-dom";
import { CaseStudyContainer } from "@/components/ui/CaseStudyContainer";

export default function BMSPage() {
  return (
    <div className="min-h-screen bg-[#fefcf4]">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-block mb-8 text-[#101010] hover:opacity-70 transition-opacity"
        >
          ← Back to Home
        </Link>
        
        <CaseStudyContainer variant="light">
          <div className="p-8 md:p-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-[#101010]">
              BUILDMYSTORE
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#555555]">
              ALL-IN-ONE ECOMMERCE PLATFORM
            </h2>
            <p className="text-lg mb-8 text-[#101010]">
              An All-In-One Ecommerce Platform That Enables Local Businesses To Easily Set Up, Manage, And Grow Their Online Stores, From Storefront Creation To Orders, Payments, And Deliveries.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["UI Design", "Ecom. Website", "Handed Off To Development"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#101010] text-white rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </CaseStudyContainer>
      </div>
    </div>
  );
}
