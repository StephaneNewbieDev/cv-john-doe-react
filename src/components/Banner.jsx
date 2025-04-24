export default function Banner({ title, image = "/banner.jpg" }) {
    return (
      <div
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          position: "relative"
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        ></div>
        <h1
          className="position-relative z-1 fw-bold"
          style={{ fontSize: "2rem", zIndex: 2 }}
        >
          {title}
        </h1>
      </div>
    );
  }
  