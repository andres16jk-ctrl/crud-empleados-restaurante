import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import type { Employee } from "../types/Employee";

interface EmployeeFormProps {
  onAddEmployee: (employee: Employee) => void;
  onUpdateEmployee: (employee: Employee) => void;
  employeeToEdit: Employee | null;
  onCancelEdit: () => void;
}

function EmployeeForm({
  onAddEmployee,
  onUpdateEmployee,
  employeeToEdit,
  onCancelEdit,
}: EmployeeFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    area: "",
    salario: "",
    fechaInicio: "",
    fechaFin: "",
  });

  useEffect(() => {
    if (employeeToEdit) {
      setFormData({
        nombre: employeeToEdit.nombre,
        area: employeeToEdit.area,
        salario: employeeToEdit.salario.toString(),
        fechaInicio: employeeToEdit.fechaInicio,
        fechaFin: employeeToEdit.fechaFin,
      });
    } else {
      setFormData({
        nombre: "",
        area: "",
        salario: "",
        fechaInicio: "",
        fechaFin: "",
      });
    }
  }, [employeeToEdit]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      area: "",
      salario: "",
      fechaInicio: "",
      fechaFin: "",
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
    !formData.nombre ||
    !formData.area ||
    !formData.salario ||
    !formData.fechaInicio ||
    !formData.fechaFin
    ) {
    alert("Por favor complete todos los campos.");
    return;
    }

    if (formData.nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");
    return;
    }

    if (Number(formData.salario) <= 0) {
    alert("El salario debe ser mayor a 0.");
    return;
    }

    if (formData.fechaFin < formData.fechaInicio) {
    alert("La fecha de finalización no puede ser menor a la de inicio.");
    return;
    }
    
    if (employeeToEdit) {
      const updatedEmployee: Employee = {
        id: employeeToEdit.id,
        nombre: formData.nombre,
        area: formData.area,
        salario: Number(formData.salario),
        fechaInicio: formData.fechaInicio,
        fechaFin: formData.fechaFin,
      };

      onUpdateEmployee(updatedEmployee);
    } else {
      const newEmployee: Employee = {
        id: crypto.randomUUID(),
        nombre: formData.nombre,
        area: formData.area,
        salario: Number(formData.salario),
        fechaInicio: formData.fechaInicio,
        fechaFin: formData.fechaFin,
      };

      onAddEmployee(newEmployee);
    }

    resetForm();
  };

  const handleCancel = () => {
    resetForm();
    onCancelEdit();
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>{employeeToEdit ? "Editar empleado" : "Registrar empleado"}</h2>

      <div className="form-group">
        <label htmlFor="nombre">Nombre del empleado</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingrese el nombre"
        />
      </div>

      <div className="form-group">
        <label htmlFor="area">Área o departamento</label>
        <select
          id="area"
          name="area"
          value={formData.area}
          onChange={handleChange}
        >
          <option value="">Seleccione un área</option>
          <option value="Cocina">Cocina</option>
          <option value="Caja">Caja</option>
          <option value="Atención al cliente">Atención al cliente</option>
          <option value="Administración">Administración</option>
          <option value="Limpieza">Limpieza</option>
          <option value="Domicilios">Domicilios</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="salario">Salario</label>
        <input
          type="number"
          id="salario"
          name="salario"
          value={formData.salario}
          onChange={handleChange}
          placeholder="Ingrese el salario"
        />
      </div>

      <div className="form-group">
        <label htmlFor="fechaInicio">Fecha de inicio de contrato</label>
        <input
          type="date"
          id="fechaInicio"
          name="fechaInicio"
          value={formData.fechaInicio}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="fechaFin">Fecha de finalización de contrato</label>
        <input
          type="date"
          id="fechaFin"
          name="fechaFin"
          value={formData.fechaFin}
          onChange={handleChange}
        />
      </div>

      <div className="button-group">
        <button type="submit">
          {employeeToEdit ? "Actualizar empleado" : "Agregar empleado"}
        </button>

        {employeeToEdit && (
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancelar edición
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;