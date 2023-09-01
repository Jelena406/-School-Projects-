export function PasswordBox({password}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch (error) {}
  };
  return (
    <div onClick={handleCopy} className="password-box">
      <p>{password}</p>
      <span>COPIED</span>
      <img src="../assets/images/icon-copy.svg" />
    </div>
  );
}
