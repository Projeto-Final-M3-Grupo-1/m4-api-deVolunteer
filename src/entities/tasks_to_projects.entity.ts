import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import Project from "./projects.entity";
import Task from "./tasks.entity";

@Entity("tasks_to_projects")
class Tasks_to_Projects {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  created_in: Date;

  @ManyToOne(() => Task, (task) => task.id)
  task: Task;

  @ManyToOne(() => Project, (projects) => projects.id)
  project: Project;
}

export default Tasks_to_Projects;
