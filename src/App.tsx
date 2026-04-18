import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import type { Employee } from "./types/Employee";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      return JSON.parse(savedEmployees);
    }

    return [];
  });

  const [employeeToEdit, setEmployeeToEdit] = useState<Employee | null>(null);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = (employee: Employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  const handleDeleteEmployee = (id: string) => {
    const confirmDelete = window.confirm(
      "¿Está seguro de eliminar este empleado?"
    );

    if (!confirmDelete) return;

    setEmployees((prevEmployees) =>
      prevEmployees.filter((employee) => employee.id !== id)
    );

    if (employeeToEdit && employeeToEdit.id === id) {
      setEmployeeToEdit(null);
    }
  };

  const handleEditEmployee = (employee: Employee) => {
    setEmployeeToEdit(employee);
  };

  const handleUpdateEmployee = (updatedEmployee: Employee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === updatedEmployee.id ? updatedEmployee : employee
      )
    );

    setEmployeeToEdit(null);
  };

  const handleCancelEdit = () => {
    setEmployeeToEdit(null);
  };

  return (
    <div>
      <h1>Gestión de empleados - Cadena de restaurantes</h1>
      <p>Proyecto CRUD desarrollado con React, TypeScript y Vite.</p>

      <div className="container">
        <EmployeeForm
          onAddEmployee={handleAddEmployee}
          onUpdateEmployee={handleUpdateEmployee}
          employeeToEdit={employeeToEdit}
          onCancelEdit={handleCancelEdit}
        />
        <EmployeeList
          employees={employees}
          onDeleteEmployee={handleDeleteEmployee}
          onEditEmployee={handleEditEmployee}
        />
      </div>
    </div>
  );
}

export default App;