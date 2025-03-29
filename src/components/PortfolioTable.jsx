const PortfolioTable = ({ activeTab }) => {
  const data = [
    {
      loanNo: "L28U3247",
      loanType: "Home Loan",
      borrower: "Vadika Sachar",
      borrowerAddress: "123 Street, Mumbai",
      coborrower: "Aryan Sachar",
      coborrowerAddress: "123 Street, Mumbai",
      sanctionAmount: "₹1,934,563",
      region: "West",
    },
    {
      loanNo: "L28U3243",
      loanType: "Car Loan",
      borrower: "Hiralsha Agrawal",
      borrowerAddress: "45 Avenue, Delhi",
      coborrower: "N/A",
      coborrowerAddress: "N/A",
      sanctionAmount: "₹1,842,143",
      region: "North",
    },
    {
      loanNo: "L28U324683",
      loanType: "Home Loan",
      borrower: "HimaAgrawal",
      borrowerAddress: "48 Avenue, Delhi",
      coborrower: "N/A",
      coborrowerAddress: "N/A",
      sanctionAmount: "₹1,042,143",
      region: "North",
    },
    {
      loanNo: "L28128624683",
      loanType: "Education Loan",
      borrower: "Marry",
      borrowerAddress: "48 Avenue, Hyderabad",
      coborrower: "N/A",
      coborrowerAddress: "N/A",
      sanctionAmount: "₹1,042,143",
      region: "South",
    },

  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Loan No.</th>
            <th className="p-2 border">Type</th>
            <th className="p-2 border">Borrower</th>
            <th className="p-2 border">Borrower Address</th>
            <th className="p-2 border">Co-borrower</th>
            <th className="p-2 border">Co-borrower Address</th>
            <th className="p-2 border">Sanction Amount</th>
            <th className="p-2 border">Region</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="p-2 border">{item.loanNo}</td>
              <td className="p-2 border">{item.loanType}</td>
              <td className="p-2 border">{item.borrower}</td>
              <td className="p-2 border">{item.borrowerAddress}</td>
              <td className="p-2 border">{item.coborrower}</td>
              <td className="p-2 border">{item.coborrowerAddress}</td>
              <td className="p-2 border">{item.sanctionAmount}</td>
              <td className="p-2 border">{item.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
