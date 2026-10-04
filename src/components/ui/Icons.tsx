import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </StrokeIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </StrokeIcon>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </StrokeIcon>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5v-3a4 4 0 0 1 8 0v3" />
    </StrokeIcon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </StrokeIcon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7.5 8.5 6 8.5-6" />
    </StrokeIcon>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M22 2 11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7Z" />
    </StrokeIcon>
  );
}

export function CodeIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m13.5 5-3 14" />
    </StrokeIcon>
  );
}

export function DatabaseIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
      <path d="M5 5.5v13c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-13" />
      <path d="M5 12c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5" />
    </StrokeIcon>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="m3 13 9 5 9-5" />
    </StrokeIcon>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2c.6 5.5 4.5 9.4 10 10-5.5.6-9.4 4.5-10 10-.6-5.5-4.5-9.4-10-10 5.5-.6 9.4-4.5 10-10Z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35ZM12.05 21.79h-.01a9.7 9.7 0 0 1-4.94-1.35l-.35-.21-3.67.96.98-3.58-.23-.37a9.66 9.66 0 0 1-1.48-5.16c0-5.34 4.35-9.69 9.7-9.69 2.59 0 5.02 1.01 6.85 2.84a9.62 9.62 0 0 1 2.84 6.86c0 5.34-4.35 9.7-9.7 9.7Zm8.25-17.95A11.62 11.62 0 0 0 12.05.44C5.6.44.36 5.68.36 12.13c0 2.06.54 4.08 1.56 5.85L.27 23.56l5.7-1.5a11.66 11.66 0 0 0 5.58 1.42h.01c6.45 0 11.7-5.24 11.7-11.69 0-3.12-1.22-6.06-3.43-8.27Z" />
    </svg>
  );
}
