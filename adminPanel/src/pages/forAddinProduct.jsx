import {
  Button,
  IconButton,
  MenuItem,
  Paper,
  Select,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Avatar } from "antd";
import { Delete } from "@mui/icons-material";
import { CirclePicker } from "react-color";
import BackupIcon from "@mui/icons-material/Backup";
import { useDispatch, useSelector } from "react-redux";
import { GetColors } from "../api/apiAsyncThunk";

const ForAddinProduct = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const { colors } = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetColors());
  }, [dispatch]);

  const handleColorChange = (colorId) => {
    setSelectedColor(colorId);
    console.log("Selected color:", colorId);
  };

  // Массив с названиями цветов в нижнем регистре
  const colorOptions = colors.map((color) => color.colorName.toLowerCase());
  console.log(colorOptions);

  /// Для FileBase64
  const [images, setImages] = useState([]);
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    files?.forEach((file) => {
      console.log(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        newImages.push({ name: file.name, base64: reader.result });
        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handleDeleteImage = (indexToDelete) => {
    setImages(images.filter((_, index) => index !== indexToDelete)); // Удаляем изображение по индексу
  };

  return (
    <div className="p-[20px] ">
      <h1 className="flex justify-between items-center text-[32px]">
        Products / Add new
        <span className="flex gap-[20px] items-center">
          <Link to={"/layout/products"}>
            <Button variant="outlined">Cancel</Button>
          </Link>
          <span>
            <Button variant="contained">Save</Button>
          </span>
        </span>
      </h1>

      <form action="" className="flex w-[100%] justify-between py-[20px]">
        <div className="w-[70%] ">
          {/* Поля для ввода информации о продукте */}
          <div className="flex gap-[20px] py-[20px] w-[100%] ">
            <TextField label="Product Name" size="" sx={{ width: "70%" }} />
            <TextField label="Code" size="" sx={{ width: "100px" }} />
          </div>

          {/* Описание продукта */}
          <div className="mb-[50px]">
            <ReactQuill
              theme="snow"
              placeholder="description "
              style={{ padding: "20px,0px", height: "150px", width: "80%" }}
            />
          </div>

          {/* Выбор категории и бренда */}
          <div className="flex items-center gap-[20px]">
            <Select>
              <MenuItem>Select Category</MenuItem>
              <MenuItem>Техника для красоты</MenuItem>
              <MenuItem>Интернет пакеты и красивые номера</MenuItem>
              <MenuItem>Транспорт</MenuItem>
              <MenuItem>Смартфоны и планшеты</MenuItem>
            </Select>
            <Select>
              <MenuItem>Select Brands</MenuItem>
              <MenuItem value="">Tecno</MenuItem>
              <MenuItem value="">SAMSUNG1</MenuItem>
              <MenuItem value="">Xiaomi</MenuItem>
              <MenuItem value="">Apple</MenuItem>
            </Select>
          </div>

          {/* Цена, скидка и количество */}
          <div className="flex gap-[20px] p-[20px]">
            <TextField
              label="Price"
              type="number"
              size=""
              sx={{ width: "20%" }}
            />
            <TextField label="Discount" type="number" sx={{ width: "20%" }} />
            <TextField
              label="Quantity"
              type="number"
              size=""
              sx={{ width: "20%" }}
            />
          </div>
        </div>

        {/* Правая колонка с выбором цвета и загрузкой изображений */}
        <div className="w-[30%] flex justify-center flex-col gap-[20px]">
          {/* Выбор цвета */}
          <div>
            <div className="p-[20px] border-[3px]">
              <h1 className="font-bold text-[24px] pb-[20px]">Colour:</h1>
              <div className="flex flex-wrap justify-start gap-[10px]">
                {colors.map((el) => (
                  <label className="radio-label" key={el.id}>
                    <input
                      type="radio"
                      name="color"
                      value={el.id}
                      className="hidden"
                      checked={selectedColor === el.id}
                      onChange={() => handleColorChange(el.id)}
                    />
                    <span
                      className={`w-8 h-8 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center ${
                        selectedColor === el.id ? "ring-2 ring-blue-500" : ""
                      }`} // Добавляем стиль для выделения
                      style={{ backgroundColor: `${el.colorName.toLowerCase()}` }}
                    ></span>
                  </label>
                ))}
              </div>
            </div>

            {/* Загрузка изображений */}
            <div className="py-[20px]">
              <div className="text-center p-[20px] border">
                <p>
                  <IconButton>
                    <BackupIcon fontSize="large" />
                  </IconButton>
                </p>
                <h1>
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer font-bold underline"
                  >
                    Click to upload
                  </label>{" "}
                  or drag and drop
                </h1>
                <p className="text-[#6C737F]">
                  (SVG, JPG, PNG, or gif maximum 900x400)
                </p>
              </div>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />

              {/* Список загруженных изображений */}
              <div className="py-[20px]">
                <TableContainer component={Paper}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Image</TableCell>
                      <TableCell>File name</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {images.length > 0 ? (
                      images.map((image, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Avatar src={image.base64} size="large" />
                          </TableCell>
                          <TableCell>{image.name}</TableCell>
                          <TableCell>
                            <IconButton onClick={() => handleDeleteImage(index)}>
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell>
                          <p>No images uploaded yet.</p>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForAddinProduct;
