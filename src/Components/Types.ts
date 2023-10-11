//Defining Customer Interface
export interface Types {
  customer: Customer
  
  
  open?: boolean;
  onCancel?: () => void;
}

export interface Customer {
  id: number;
  name: string;
  age: number;
  contact: string;
  address: string;
};