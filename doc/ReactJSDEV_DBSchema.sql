CREATE TABLE `users_details`
(
  `users_detail_id` int PRIMARY KEY,
  `fk_user_id` int,
  `full_name` varchar(255),
  `email` varchar(255) UNIQUE,
  `gender` varchar(255),
  `date_of_birth` varchar(255),
  `created_at` varchar(255),
  `country_code` int
);

CREATE TABLE `users`
(
  `id` int PRIMARY KEY,
  `username` varchar(255),
  `password` varchar(255),
  `user_type` varchar(255)
);

CREATE TABLE `tasks`
(
  `task_id` int PRIMARY KEY,
  `task_title` varchar(255),
  `task_description` varchar(255),
  `task_assigned_to` int
);

CREATE TABLE `task_status`
(
  `task_status_id` int PRIMARY KEY,
  `fk_task_id` int,
  `task_status` varchar(255),
  `task_time_updated` varchar(255)
);

ALTER TABLE `users_details` ADD FOREIGN KEY (`fk_user_id`) REFERENCES `users` (`id`);

ALTER TABLE `task_status` ADD FOREIGN KEY (`fk_task_id`) REFERENCES `task` (`task_id`);

ALTER TABLE `task` ADD FOREIGN KEY (`task_assigned_to`) REFERENCES `users` (`id`);
