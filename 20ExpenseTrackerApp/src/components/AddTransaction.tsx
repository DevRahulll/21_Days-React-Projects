import {
  Button,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  Field,
  Input,
  RadioGroup,
} from "@chakra-ui/react";
import useGlobalContext from "@/hooks/useGlobalContext";
import type { ChangeEvent, FormEvent } from "react";
import type { TransactionType } from "@/context/context";

interface AddTransactionProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTransaction({
  onClose,
  isOpen,
}: AddTransactionProps) {
  const {
    formData,
    setFormData,
    setAllTransactions,
    setTotalIncome,
    setTotalExpense,
  } = useGlobalContext();

  function handleFormChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value: inputValue } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "amount"
          ? inputValue === ""
            ? 0
            : parseFloat(inputValue) || 0
          : inputValue,
    }));
  }

  function onFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    // Form validation
    if (!formData.description.trim()) {
      alert("Please enter a description");
      return;
    }

    if (formData.amount <= 0) {
      alert("Please enter a valid amount greater than 0");
      return;
    }

    // Ensure type is valid
    const transactionType = formData.type === "income" ? "income" : "expense";

    const transaction: TransactionType = {
      type: transactionType,
      amount: parseFloat(formData.amount.toString()),
      description: formData.description.trim(),
    };

    // Update transactions
    setAllTransactions((prev) => [...prev, transaction]);

    // Update totals based on type
    if (transactionType === "income") {
      setTotalIncome((prev) => prev + transaction.amount);
    } else {
      setTotalExpense((prev) => prev + transaction.amount);
    }

    // Reset form
    setFormData({
      type: "income",
      amount: 0,
      description: "",
    });

    onClose();
  }

  return (
    <DialogRoot open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>Add New Transaction</DialogHeader>
        <DialogCloseTrigger />

        <form onSubmit={onFormSubmit}>
          <DialogBody>
            <Field.Root>
              <Field.Label>Enter Description</Field.Label>
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
                value={formData.description}
                onChange={handleFormChange}
                required
              />
            </Field.Root>
            <Field.Root mt={"4"}>
              <Field.Label>Enter Amount</Field.Label>
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
                min="0.01"
                step="0.01"
                value={formData.amount || ""}
                onChange={handleFormChange}
                required
              />
            </Field.Root>

            <RadioGroup.Root
              value={formData.type}
              onValueChange={({ value }) => {
                setFormData((prev) => ({
                  ...prev,
                  type: value as "income" | "expense",
                }));
              }}
              mt="5"
            >
              <RadioGroup.Item value="income">
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Income</RadioGroup.ItemText>
              </RadioGroup.Item>

              <RadioGroup.Item value="expense">
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>Expense</RadioGroup.ItemText>
              </RadioGroup.Item>
            </RadioGroup.Root>
          </DialogBody>

          <DialogFooter>
            <Button mr={"4"} onClick={onClose} type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" colorScheme={"blue"}>
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </DialogRoot>
  );
}
