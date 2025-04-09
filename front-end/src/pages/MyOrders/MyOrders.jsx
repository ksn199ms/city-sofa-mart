import  { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import Navbar from '../../components/Navbar/NavBar';
import Footer from '../../components/Footer/Footer';

const ordersData = [
  {
    id: 'ORD1001',
    date: '2025-04-01',
    status: 'Delivered',
    total: '$120.00',
    items: ['Sofa Leg', 'Wooden Frame'],
    address: '123 Furniture Street, Bangalore',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD1002',
    date: '2025-04-05',
    status: 'Pending',
    total: '$75.50',
    items: ['Cushion Set', 'Back Support'],
    address: '45 Sofa Lane, Kochi',
    paymentMethod: 'UPI',
  },
  {
    id: 'ORD1003',
    date: '2025-04-07',
    status: 'Delivered',
    total: '$89.99',
    items: ['Armrest', 'Sofa Fabric'],
    address: '89 Decor Ave, Chennai',
    paymentMethod: 'Cash on Delivery',
  },
  // Add more items if needed
];

const ITEMS_PER_PAGE = 2;

export default function MyOrders() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = ordersData
    .filter((order) =>
      filter === 'All' ? true : order.status === filter
    )
    .filter(
      (order) =>
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.items.join(', ').toLowerCase().includes(searchQuery.toLowerCase())
    );

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
    <Navbar/>
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-orange-600">
        My Sofa Orders
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex gap-2">
          {['All', 'Delivered', 'Pending'].map((status) => (
            <button
              key={status}
              onClick={() => {
                setFilter(status);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border ${
                filter === status
                  ? 'bg-orange-500 text-white'
                  : 'bg-white text-gray-700 border-orange-300'
              } hover:bg-orange-400 hover:text-white transition`}
            >
              {status}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search by ID or Item..."
          className="px-4 py-2 rounded border border-orange-300 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="grid gap-6">
        {paginatedOrders.length ? (
          paginatedOrders.map((order) => (
            <div
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className="bg-orange-50 shadow-md rounded-xl p-5 border border-orange-100 hover:shadow-lg transition cursor-pointer"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <p className="text-sm text-orange-400">Order ID</p>
                  <p className="font-semibold">{order.id}</p>
                </div>
                <div className="text-sm text-right">
                  <p className="text-orange-400">Date</p>
                  <p>{order.date}</p>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-sm text-orange-400">Items</p>
                <p className="text-gray-800">{order.items.join(', ')}</p>
              </div>

              <div className="flex justify-between items-center">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {order.status}
                </span>
                <span className="font-semibold text-lg text-orange-700">
                  {order.total}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? 'bg-orange-500 text-white'
                  : 'bg-white border border-orange-300 text-orange-500'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Order Detail Modal */}
      <Dialog open={!!selectedOrder} onClose={() => setSelectedOrder(null)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white w-full max-w-md rounded-lg p-6 shadow-lg relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-black"
            >
              <X size={20} />
            </button>
            <Dialog.Title className="text-lg font-semibold text-orange-600 mb-4">
              Order Details - {selectedOrder?.id}
            </Dialog.Title>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium">Date:</span> {selectedOrder?.date}
              </p>
              <p>
                <span className="font-medium">Status:</span>{' '}
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    selectedOrder?.status === 'Delivered'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                  }`}
                >
                  {selectedOrder?.status}
                </span>
              </p>
              <p>
                <span className="font-medium">Items:</span>{' '}
                {selectedOrder?.items.join(', ')}
              </p>
              <p>
                <span className="font-medium">Total:</span>{' '}
                {selectedOrder?.total}
              </p>
              <p>
                <span className="font-medium">Payment Method:</span>{' '}
                {selectedOrder?.paymentMethod}
              </p>
              <p>
                <span className="font-medium">Delivery Address:</span>{' '}
                {selectedOrder?.address}
              </p>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
    <Footer/>
    </>
  );
}
