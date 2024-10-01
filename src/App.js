import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

const projects = [
  {
    name: 'Graph API',
    initials: 'GA',
    href: '#',
    members: 16,
    bgColor: 'bg-pink-600',
    isPinned: true,
  },
  {
    name: 'Component Design',
    initials: 'CD',
    href: '#',
    members: 12,
    bgColor: 'bg-purple-600',
    isPinned: true,
  },
  {
    name: 'Templates',
    initials: 'T',
    href: '#',
    members: 16,
    bgColor: 'bg-yellow-500',
    isPinned: false,
  },
  {
    name: 'React Components',
    initials: 'RC',
    href: '#',
    members: 8,
    bgColor: 'bg-green-500',
    isPinned: true,
  },
];

// Use filter and map to display only pinned projects
export default function PinnedProjects() {
  return (
    <div className="projects-wrapper">
      <h2 className="projects-title">Pinned Projects</h2>
      <ul className="projects-list">
        {projects
          .filter((project) => project.isPinned)
          .map((project, index) => (
            <PinnedProject project={project} key={index} />
          ))}
      </ul>
    </div>
  );
}

function PinnedProject({ project }) {
  return (
    <li className="project-list-item">
      <div className={`${project.bgColor} project-initials`}>
        {project.initials}
      </div>
      <div className="project-content-wrapper">
        <div className="project-content">
          <a href={project.href} className="project-link">
            {project.name}
          </a>
          <p className="project-members">{project.members} Members</p>
        </div>
        <div className="project-button-wrapper">
          <button type="button" className="project-button">
            <EllipsisVerticalIcon className="project-icon" />
          </button>
        </div>
      </div>
    </li>
  );
}
