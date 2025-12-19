export const css = (...classNames: (string | undefined | false)[]) =>
  classNames.filter(Boolean).join(" ");