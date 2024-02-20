import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px",
        }}>
            <h1>DEX Tester</h1>
            <ConnectWallet/>
        </div>
    )
}