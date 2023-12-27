export type ClassName = string | boolean | undefined;

export default function cn(...classNames: ClassName[]): string {
  return classNames.filter(Boolean).join(" ");
}
