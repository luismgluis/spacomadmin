type BillTypeType = {
  id?: string;
  name: string;
  price: number;
  description?: string;
  creationDate: number;
};

class BillType {
  id: string;
  name: string;
  price: number;
  description: string;
  creationDate: number;
  constructor(id: string, data: BillTypeType | null) {
    this.id = id;
    this.name = data?.name || "";
    this.price = data?.price || 0;
    this.description = data?.description || "";
    this.creationDate = data?.creationDate || 0;
  }
  isEmpty() {
    if (this.id === "") return true;
    return false;
  }
  exportToUpload() {
    return {
      name: this.name,
      price: this.price,
      description: this.description,
      creationDate: this.creationDate,
    };
  }
}
export default BillType;
