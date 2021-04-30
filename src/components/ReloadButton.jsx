export default function ReloadButton() {
  return (
    <div className="d-flex justify-content-center pb-3">
      <button
        onClick={() => window.location.reload()}
        type="submit"
        className="btn btn-danger text-center mt-5"
      >
        Reset
      </button>
    </div>
  );
}
