export function TextOfGameMaster() {
  return (
    <>
      <div
        id="textContainer"
        style={{
          display: "flex",
          minWidth: "250px",
          maxHeight: "180px",
          border: "1px solid #ccc",
          padding: "10px",
          boxSizing: "border-box",
          position: "relative",
          margin: 0,
        }}
      >
        <p
          id="resizableText"
          style={{
            overflow: "auto",
            fontSize: `18px`,
            wordBreak: "break-word",
            flex: 1,
            margin: 0,
          }}
        >
          This is sample of text
        </p>
      </div>
    </>
  );
}
