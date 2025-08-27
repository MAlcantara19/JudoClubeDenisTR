import '../styles/styles.css'; // importe o CSS global

export const metadata = {
  title: 'Judô Clube Denis de Toledo Ribas',
  description: 'Site do Judô Clube Denis de Toledo Ribas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
