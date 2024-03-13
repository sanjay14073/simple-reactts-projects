import 'bootstrap/dist/css/bootstrap.min.css';

interface NavbarProps {
    array: string[];
    setfunction: (currency_name: string) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCurrency = event.target.value;
        props.setfunction(selectedCurrency);
    };

    return (
        <nav style={navStyle} className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <h2 style={{ color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Currency Converter</h2>
                <select className="form-select" onChange={handleSelectChange} style={{ maxWidth: '200px' }}>
                    <option value="" style={{ color: '#333' }}>Select Currency</option>
                    {props.array.map((currency, index) => (
                        <option key={index} value={currency} style={{ color: '#333' }}>{currency}</option>
                    ))}
                </select>
            </div>
        </nav>
    );
};

const navStyle: React.CSSProperties = {
    marginBottom: '20px',
    backgroundColor:'lightgray'
};

export default Navbar;
