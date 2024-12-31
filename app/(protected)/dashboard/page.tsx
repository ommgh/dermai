"use client";

import { useState } from "react";
import DashboardLayout from "@/app/(protected)/dashboard/_components/dashboard-layout";
import ImageUpload from "@/app/(protected)/dashboard/_components/image-upload";
import AnalysisResults from "@/app/(protected)/dashboard/_components/analysis-results";
import ProductRecommendations from "@/app/(protected)/dashboard/_components/product-recommendations";
import NutritionGuide from "@/app/(protected)/dashboard/_components/nutrition-guide";

// Mock data for demonstration
const mockResults = {
  skinType: "Combination",
  concerns: ["Dryness", "Uneven texture"],
  hydrationLevel: 65,
};

const mockProducts = [
  {
    id: "1",
    name: "Hydrating Serum",
    description: "Intense hydration for all skin types",
    image: "/serum_mock.avif",
  },
  {
    id: "2",
    name: "Balancing Toner",
    description: "Restores skin's natural pH balance",
    image: "/toner_mock.avif",
  },
  {
    id: "3",
    name: "Nourishing Night Cream",
    description: "Repairs and rejuvenates while you sleep",
    image: "/cream_mock.avif",
  },
];

const mockNutritionTips = [
  {
    title: "Stay Hydrated",
    description:
      "Drink at least 8 glasses of water daily to keep your skin hydrated from within.",
  },
  {
    title: "Eat Antioxidant-Rich Foods",
    description:
      "Include berries, leafy greens, and nuts in your diet to fight free radicals and promote skin health.",
  },
  {
    title: "Omega-3 Fatty Acids",
    description:
      "Consume fatty fish, flaxseeds, or walnuts to support skin barrier function and reduce inflammation.",
  },
];

export default function Dashboard() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleUpload = (file: File) => {
    setIsAnalyzing(true);
    // Simulating ML model processing
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-light mb-8">Skin Analysis Dashboard</h1>

      {!showResults && (
        <div className="mb-8">
          <ImageUpload onUpload={handleUpload} />
        </div>
      )}

      {isAnalyzing && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Analyzing your skin...</p>
        </div>
      )}

      {showResults && (
        <div className="space-y-8">
          <AnalysisResults results={mockResults} />
          <ProductRecommendations products={mockProducts} />
          <NutritionGuide tips={mockNutritionTips} />
        </div>
      )}
    </DashboardLayout>
  );
}
