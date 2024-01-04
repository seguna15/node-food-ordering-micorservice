import {Request, Response, NextFunction } from "express";
import { createVendorInput } from "../dto";
import { Vendor } from "../models";



//post method controller to create vendor
export const createVendor = async (req: Request, res: Response, next: NextFunction) => {
    const {name, address, foodType, pinCode, email, password, ownerName, phone} = <createVendorInput>req.body;

    try {
        const newVendor = await Vendor.create({
          name,
          address,
          pinCode,
          foodType,
          email,
          password,
          sale: "",
          ownerName,
          phone,
          rating: 0,
          serviceAvailability: false,
          coverImage: "",
        });

        return res.status(200).json(newVendor);
    } catch (error) {
        
    }
    
}

//get method controller to create vendors
export const getVendors = async (req: Request, res: Response, next: NextFunction) => {

}
//get method controller to create vendor by ID
export const getVendorById = async (req: Request, res: Response, next: NextFunction) => {

}