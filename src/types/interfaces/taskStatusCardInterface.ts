export interface TaskStatusCardInterface {
    count: number | string;
    label: string;
    color: 'red' | 'yellow' | 'blue' | 'green';
    hasError?: boolean;
    showArrow?: boolean;
}