function InventoryItem({ name, type, quantity = 0, price = 0 }) {
	
	const lowStockThreshold = 5;
	const valueThreshold = 500;

	const totalValue = price * quantity;

	return (
		<div>
			<h2>{name} ({type})</h2>
			{
				quantity < lowStockThreshold
				&&
				<Message>
					<p><span>⚠️</span> Stock is Stock! {quantity} remaining.</p>
				</Message>
			}
			{
				totalValue > valueThreshold
				&&
				<Message>
					<p><span>💰</span> Item exceeds threshold - consider getting extra protection!</p>
				</Message>
			}
		</div>
	);
}
