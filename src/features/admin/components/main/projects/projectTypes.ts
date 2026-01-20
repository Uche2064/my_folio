/**
 * Project-related TypeScript types used by the admin project management UI.
 *
 * Keep these small and focused — expand as you integrate with your backend schema.
 */

/**
 * A project record as stored in the database / returned by the API.
 */
export type Project = {
  id: string;
  title: string;
  description?: string;
  link?: string; // public/demo URL
  repo?: string; // repository URL
  client?: string; // client or owner name
  tags?: string[]; // simple tag list
  featuredImage?: string; // URL to image
  isPublished?: boolean;
  createdAt?: string; // ISO date string
  updatedAt?: string; // ISO date string
};

/**
 * Shape for creating a new project (what the form should submit).
 * Excludes server-generated fields like `id` and timestamps.
 */
export type NewProject = Omit<Project, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Values used by the project form component.
 * `tags` is a comma-separated string here for easier binding to an input,
 * convert to/from `string[]` when sending/receiving from the API.
 */
export type ProjectFormValues = {
  title: string;
  shortDesc?: string;
  liveUrl?: string;
  repoUrl?: string;
  slug?: string;
  client?: string;
  published?: boolean;
};

/**
 * Generic response used for list endpoints.
 */
export type ProjectListResponse = {
  data: Project[];
  total?: number;
};
