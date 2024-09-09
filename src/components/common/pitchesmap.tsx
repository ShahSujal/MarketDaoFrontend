import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { walletAddressShortn } from "@/lib/actions";
import { TInvestmentMonthlyData } from "@/types/common"
import { Address } from "viem";
  
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  type Props ={
    analytics: TInvestmentMonthlyData;
  }
  export function PitchTable({analytics}:Props) {
    return (
      <Table className=" text-white">
        <TableHeader>
         <h1 className=" text-3xl text-[#c0bebe] my-5 ">Recent Pitches</h1>
          <TableRow>
            <TableHead >walletAddress</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {analytics.last10Investments.map((item) => (
            <TableRow key={item.userId}>
              <TableCell className="font-medium">{walletAddressShortn(item.userId as Address)}</TableCell>
              <TableCell>{item.Status}</TableCell>
              <TableCell>{item.createdAt.toDateString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  