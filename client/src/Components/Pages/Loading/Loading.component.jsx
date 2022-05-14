export const Loading = () => {
  return (
    <>
      <img
        id="loadingImgGif"
        src="https://icon-library.com/images/waiting-icon-gif/waiting-icon-gif-13.jpg"
        alt=""
      />
    </>
  );
};

export const StopLoading = () => {
  const loadingImgGif = document.getElementById("loadingImgGif");
  loadingImgGif.style.display = "none";
};
