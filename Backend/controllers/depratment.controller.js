const Department = require('../models/Department');
const User = require('../models/User');


exports.createDepartment = async (req, res, next) => {
    try {
        const { name, managerId } = req.body;

        
        const existingDept = await Department.findOne({ name });
        if (existingDept) {
            const err = new Error('Department name already exists.');
            err.statusCode = 400;
            return next(err);
        }

        
        if (managerId) {
            const managerExists = await User.findById(managerId);
            if (!managerExists) {
                const err = new Error('The assigned manager user was not found.');
                err.statusCode = 404;
                return next(err);
            }
        }

        const newDepartment = new Department({
            name,
            manager: managerId || null
        });

        await newDepartment.save();

        res.status(201).json({
            success: true,
            message: 'Department created successfully.',
            data: newDepartment
        });
    } catch (error) {
        next(error);
    }
};


exports.getAllDepartments = async (req, res, next) => {
    try {
        
        const departments = await Department.find()
            .populate('manager', 'fullName email jobRole');

        res.status(200).json({
            success: true,
            count: departments.length,
            data: departments
        });
    } catch (error) {
        next(error);
    }
};


exports.getDepartmentById = async (req, res, next) => {
    try {
        const department = await Department.findById(req.params.id)
            .populate('manager', 'fullName email jobRole');

        if (!department) {
            const err = new Error('Department not found.');
            err.statusCode = 404;
            return next(err);
        }

        res.status(200).json({
            success: true,
            data: department
        });
    } catch (error) {
        next(error);
    }
};


exports.updateDepartment = async (req, res, next) => {
    try {
        const { name, managerId } = req.body;
        const department = await Department.findById(req.params.id);

        if (!department) {
            const err = new Error('Department not found.');
            err.statusCode = 404;
            return next(err);
        }


        if (name && name !== department.name) {
            const nameExists = await Department.findOne({ name });
            if (nameExists) {
                const err = new Error('Department name already exists.');
                err.statusCode = 400;
                return next(err);
            }
            department.name = name;
        }

      
        if (managerId) {
            const managerExists = await User.findById(managerId);
            if (!managerExists) {
                const err = new Error('The assigned manager user was not found.');
                err.statusCode = 404;
                return next(err);
            }
            department.manager = managerId;
        }

        await department.save();

        res.status(200).json({
            success: true,
            message: 'Department updated successfully.',
            data: department
        });
    } catch (error) {
        next(error);
    }
};


exports.deleteDepartment = async (req, res, next) => {
    try {
        const department = await Department.findById(req.params.id);

        if (!department) {
            const err = new Error('Department not found.');
            err.statusCode = 404;
            return next(err);
        }

        
        const employeesInDept = await User.findOne({ department: req.params.id, isActive: true });
        if (employeesInDept) {
            const err = new Error('Cannot delete department. There are active employees assigned to it.');
            err.statusCode = 400;
            return next(err);
        }

        await Department.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Department deleted successfully.'
        });
    } catch (error) {
        next(error);
    }
};