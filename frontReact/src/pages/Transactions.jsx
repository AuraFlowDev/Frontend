import PackageCard from "../components/PackageCard";




function Transactions() {
    return (
        <>
            <PackageCard packageID={{ title: "Title1", price: "20€" }} variant="dark" />
            <PackageCard packageID={{ title: "Title1", price: "20€" }} variant="teal" />
        </>
    );
}

export default Transactions;