interface AnalysisResultsProps {
  results: {
    skinType: string;
    concerns: string[];
    hydrationLevel: number;
  };
}

export default function AnalysisResults({ results }: AnalysisResultsProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-light mb-4">Analysis Results</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium">Skin Type</h3>
          <p className="text-gray-600">{results.skinType}</p>
        </div>
        <div>
          <h3 className="text-lg font-medium">Concerns</h3>
          <ul className="list-disc list-inside text-gray-600">
            {results.concerns.map((concern, index) => (
              <li key={index}>{concern}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-medium">Hydration Level</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{ width: `${results.hydrationLevel}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {results.hydrationLevel}% hydrated
          </p>
        </div>
      </div>
    </div>
  );
}
