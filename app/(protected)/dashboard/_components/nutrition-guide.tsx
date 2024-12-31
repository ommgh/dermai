interface NutritionTip {
  title: string;
  description: string;
}

interface NutritionGuideProps {
  tips: NutritionTip[];
}

export default function NutritionGuide({ tips }: NutritionGuideProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-light mb-4">
        Nutrition Guide for Healthy Skin
      </h2>
      <div className="space-y-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
          >
            <h3 className="text-lg font-medium mb-2">{tip.title}</h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
