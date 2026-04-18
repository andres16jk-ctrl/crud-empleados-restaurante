import type { Employee } from "../types/Employee";

interface EmployeeListProps {
  employees: Employee[];
  onDeleteEmployee: (id: string) => void;
  onEditEmployee: (employee: Employee) => void;
}

function EmployeeList({
  employees,
  onDeleteEmployee,
  onEditEmployee,
}: EmployeeListProps) {
  return (
    <div className="employee-list">
      <h2>Lista de empleados</h2>

      {employees.length === 0 ? (
        <p>No hay empleados registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Área</th>
              <th>Salario</th>
              <th>Fecha inicio</th>
              <th>Fecha fin</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.nombre}</td>
                <td>{employee.area}</td>
                <td>${employee.salario.toLocaleString("es-CO")}</td>
                <td>{employee.fechaInicio}</td>
                <td>{employee.fechaFin}</td>
                <td className="actions-cell">
                  <button
                    className="edit-button"
                    onClick={() => onEditEmployee(employee)}
                  >
                    Editar
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onDeleteEmployee(employee.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeList;