export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            try {
              const theme = localStorage.getItem('theme');
              if (theme) {
                document.documentElement.classList.add(theme);
              }
            } catch (e) {}
          `,
        }}
      />
    </>
  );
}
