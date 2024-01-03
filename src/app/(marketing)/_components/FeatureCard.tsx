import { Balancer } from "react-wrap-balancer";

interface Props {
  classText: string;
  emoji: string;
  title: string;
  content: string;
}

export default function FeatureCard({
  classText,
  emoji,
  title,
  content,
}: Props): JSX.Element {
  return (
    <div
      className={
        `${classText}` +
        " from-gray-2 via-gray-3 to-gray-2 border-gray-6 rounded-xl border px-8 py-9"
      }
    >
      <h2 className="text-3xl font-extrabold">{emoji}</h2>
      <h2 className="py-4 text-2xl font-extrabold">{title}</h2>
      <div className="text-gray-11 text-sm leading-6">
        <p>
          <Balancer>{content}</Balancer>
        </p>
      </div>
    </div>
  );
}
