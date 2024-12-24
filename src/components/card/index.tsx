import { Link } from 'preact-router';
import { Project } from '../../assets/projects/projects';
import { EXTERNAL_LINK_ICON } from '../../assets/svgs/icons';

export interface CardProps extends Project {}

function Card(props: CardProps) {
  const { header, description, link } = props;
  return (
    <Link
      href={link}
      target="_blank"
      class="block relative p-6 border rounded-xl shadow border-slate-200 dark:border-slate-700 hover:bg-slate-300 hover:text-slate-800"
    >
      <h3 class="mb-2 text-2xl font-bold tracking-tight">{header}</h3>
      <p class="font-normal">{description}</p>
      <div class="absolute top-4 right-4">{EXTERNAL_LINK_ICON}</div>
    </Link>
  );
}

export default Card;
