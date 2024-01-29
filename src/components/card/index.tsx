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
      class="block relative p-6 bg-white border border-cod-gray-200 rounded-lg shadow hover:bg-cod-gray-100 dark:bg-cod-gray-800 dark:border-cod-gray-700 dark:hover:bg-cod-gray-700"
    >
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
        {header}
      </h3>
      <p class="font-normal text-cod-gray-700 dark:text-cod-gray-200">
        {description}
      </p>
      <div class="absolute top-4 right-4">{EXTERNAL_LINK_ICON}</div>
    </Link>
  );
}

export default Card;
