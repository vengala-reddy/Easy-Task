export interface Task {
    id: string;
    userId: string;
    title: string;
    summary: string;
    completed?: boolean;
    dueDate: Date | string;
}