import "../css/PackageCard.css"


function PackageCard({ packageID, variant }) {
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
            <button className="invest-button">INVEST</button>
        </div>
    )

}

export default PackageCard;