function PageUP() {
  const scroll = () => {
    const e = document.querySelector(".container")
    e.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-up" onClick={scroll}>
      <span>
        <i class="ri-arrow-up-double-line"></i>
      </span>
    </div>
  );
}

export default PageUP;
