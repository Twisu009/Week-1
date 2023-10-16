//Defining Customer Interface
export interface Types {
  handleFollowChange: (id: number) => void;
  customer: Customer
  
  
  open?: boolean;
  onCancel?: () => void;
};

export interface Customer {
  id: number;
  name: string;
  age: number;
  contact: string;
  address: string;
  isFollowing: boolean;
};

// export interface Customer4 {
//   id: number;
//   name: string;
//   contact: string;
//   address: string;
// };
