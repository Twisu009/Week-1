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

export type CustomerData = {
  name: string;
  age: number;
  contact: string;
  address: string;
};

export type Task4ModalProps = {
  onFormSubmit: (data: any) => void;
  open: boolean;
  onCancel: () => void;
  addCustomerToTable: (newCustomer: Customer) => void;
};

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
