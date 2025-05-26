export default function About({ mode }) {
  const myStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? "#042743" : "white",
  };

  return (
    <div className="p-3" style={myStyle}>
      <h2 className="mb-4">📝 About This App</h2>
      <p>
        <strong>Text Utility Tool</strong> is a lightweight and user-friendly web
        app built to simplify everyday text manipulation tasks—right from your
        browser, with no distractions.
      </p>
      <p>
        Whether you're a writer, developer, student, or just someone looking to
        quickly clean or convert text, this tool is designed to help you do that
        efficiently.
      </p>
      <h4 className="mt-4 mb-2">🚀 Key Highlights:</h4>
      <ul>
        <li>
          <strong>Text Case Conversion</strong> – Easily switch between{" "}
          <b>UPPERCASE</b>, <b>lowercase</b>, and more.
        </li>
        <li>
          <strong>Live Word &amp; Character Count</strong> – Get instant feedback
          as you type.
        </li>
        <li>
          <strong>Reading Time Estimation</strong> – Know how long your content
          will take to read.
        </li>
        <li>
          <strong>Live Text Preview</strong> – Visualize changes as you type.
        </li>
        <li>
          <strong>Dark Mode</strong> – Comfortable usage anytime, anywhere.
        </li>
      </ul>
      <p className="mt-4">
        This is just the first version! More features like{" "}
        <b>Find &amp; Replace</b>, <b>URL/Base64 utilities</b>, and{" "}
        <b>clipboard integration</b> are already in the works.
      </p>
    </div>
  );
}
