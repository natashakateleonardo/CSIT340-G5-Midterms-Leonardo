import FeatureCard from "./FeatureCard";

function Features() {
  const featuresData = [
    {
      id: "open-source",
      tag: "Free",
      title: "Open source",
      description: "Read the code and use it in any project.",
    },
    {
      id: "lightweight",
      tag: "Small",
      title: "Lightweight",
      description: "Import only the components the page uses.",
    },
    {
      id: "easy-to-learn",
      tag: "Simple",
      title: "Easy to learn",
      description: "Every component takes a few plain props.",
    },
  ];

  return (
    <main className="grid grid-cols-3 gap-8 px-20">
      {featuresData.map((feature) => (
        <FeatureCard
          key={feature.id}
          tag={feature.tag}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </main>
  );
}

export default Features;
