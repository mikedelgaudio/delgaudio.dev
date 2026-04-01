import { Link } from 'preact-router';
import { Project } from '../../assets/projects/projects';
import { EXTERNAL_LINK_ICON } from '../../assets/svgs/icons';

export interface CardProps extends Project {
  index?: number;
}

function Card(props: CardProps) {
  const { header, description, link, index = 0 } = props;
  return (
    <Link
      href={link}
      target="_blank"
      class="skill-item block relative p-6 border rounded-xl shadow border-outline hover:bg-surface-hover animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <h3 class="mb-2 text-2xl font-bold tracking-tight">{header}</h3>
      <p class="font-normal">{description}</p>
      <div class="absolute top-4 right-4">{EXTERNAL_LINK_ICON}</div>
    </Link>
  );
}

export default Card;
