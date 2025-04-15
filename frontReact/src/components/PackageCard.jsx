import "../css/PackageCard.css";

function Payment() {
  const token = localStorage.getItem("jwt");
  fetch("http://167.172.165.97:80/paypal/payment", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount: 20, currency: "EUR" }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

function PackageCard({ packageID, variant }) {
  const test = "0";

  // Wähle die passende Variante-Klasse:
  let variantClass = "";
  if (variant === "dark") {
    variantClass = "dark-background";
  } else {
    // Standard oder z.B. "teal"
    variantClass = "teal-background";
  }

  return (
    <div className={`package-card ${variantClass}`}>
      <h2 className="title">{packageID.title}</h2>
      <h1 className="price">{packageID.price}</h1>
      <button className="invest-button" onClick={Payment}>
        INVEST
      </button>
    </div>
  );
}

export default PackageCard;
