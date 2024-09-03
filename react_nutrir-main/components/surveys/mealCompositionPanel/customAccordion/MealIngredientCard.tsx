import { FC, useEffect, useState } from 'react';
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import { useAppCtx } from '../../../../src/contexts/store';
import { pagesStyles } from '@styles/index';
import { FormikProps } from 'formik';
import { foodStepType, mealDataType } from '../../../../src/types/global';

type Props = {
    meal: mealDataType;
    ingredienteName: string;
    ingredientId: number;
    picture: string;
    formikProps: FormikProps<any>;
};

const MealIngredientCard: FC<Props> = ({
    meal,
    ingredientId,
    ingredienteName,
    picture,
    formikProps,
}) => {
    const { modeTheme } = useAppCtx();
    const {
        surveyStyles: { ingredientsPanel },
    } = pagesStyles(modeTheme);
    const [alimentoCheck, setAlimentoCheck] = useState(false);
    const [enableQuantity, setEnableQuantity] = useState<boolean>(true);
    const [quantityValue, setQuantityValue] = useState<number>(0);
    const [ingredientName, setIngredientname] = useState<string>('');
    const [error, setError] = useState(false);

    const { setFieldValue } = formikProps;
    const currentAlimentos = formikProps.getFieldProps('alimento').value;

    useEffect(() => {
        const alimentoChecked = currentAlimentos.filter(
            (alimento: foodStepType) => alimento.id === ingredientId
        );

        if (alimentoChecked.length) {
            setAlimentoCheck(true);
            setEnableQuantity(false);
            setQuantityValue(alimentoChecked[0].quantity);
        }
    }, [ingredientId, currentAlimentos]);

    const ingredientHandleChange = (e: any) => {
        if (e.target.checked) {
            setAlimentoCheck(true);
            setEnableQuantity(false);
            setIngredientname(e.target.name.toLocaleLowerCase());
        }

        if (e.target.checked === false) {
            setAlimentoCheck(false);
            setEnableQuantity(true);
            setIngredientname('');
            setQuantityValue(0);

            const newAlimentosEntry = currentAlimentos.filter(
                (alimento: foodStepType) => alimento.id !== ingredientId
            );
            if (newAlimentosEntry.lenght > 0) {
                setFieldValue('comida', meal.id);
                setFieldValue('nombre', meal.nombre);
                setFieldValue('alimento', newAlimentosEntry);
            } else {
                setFieldValue('comida', null);
                setFieldValue('nombre', '');
                setFieldValue('alimento', []);
            }
        }
    };

    const quantityFielHandleChange = (e: any) => {
        setQuantityValue(e.target.value);

        if (error) setError(false);
        if (e.target.value < 0) setError(true);

        const newAlimentosEntry = currentAlimentos.filter(
            (el: foodStepType) => el.id !== ingredientId
        );

        setFieldValue('comida', meal.id);
        setFieldValue('nombre', meal.nombre.toLocaleLowerCase());
        setFieldValue('alimento', [
            ...newAlimentosEntry,
            {
                id: ingredientId,
                nombre: ingredientName,
                quantity: parseFloat(e.target.value),
            },
        ]);
    };

    return (
        <Grid
            container
            item
            xs={12}
            sx={ingredientsPanel.compoundCard.container}
            justifyContent={'space-between'}
        >
            <Grid
                item
                container
                xs={6}
                sm={6}
                md={6}
                lg={8}
                xl={8}
                sx={ingredientsPanel.compoundCard.descriptionContainer}
            >
                <Grid
                    item
                    xs={2}
                    sm={2}
                    md={1}
                    sx={ingredientsPanel.compoundCard.imageContainer}
                >
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <Image
                            src={picture}
                            alt={`${picture}`}
                            width={50}
                            height={50}
                        />
                    </div>
                </Grid>
                <Grid
                    item
                    xs={4}
                    sx={ingredientsPanel.compoundCard.primaryText}
                >
                    <Typography>{ingredienteName}</Typography>
                </Grid>
            </Grid>

            <Grid
                container
                xs={6}
                sm={6}
                md={4}
                lg={4}
                xl={4}
                spacing={2}
                sx={ingredientsPanel.compoundCard.quantityContainer}
            >
                <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    sx={{ mr: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 } }}
                >
                    <TextField
                        onChange={quantityFielHandleChange}
                        id='outlined-number'
                        value={quantityValue}
                        disabled={enableQuantity}
                        type='number'
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={1}
                    sm={1}
                    md={2}
                    lg={2}
                    xl={2}
                    sx={ingredientsPanel.compoundCard.secondaryText}
                >
                    <Typography>Kg</Typography>
                </Grid>
                <Grid
                    item
                    xs={1}
                >
                    <Checkbox
                        checked={alimentoCheck}
                        name={ingredienteName}
                        onClick={(e) => ingredientHandleChange(e)}
                    />
                </Grid>
            </Grid>
            {error && (
                <Typography sx={ingredientsPanel.compoundCard.errorMsg}>
                    La cantidad de alimento no puede ser menor a 0
                </Typography>
            )}
        </Grid>
    );
};

export default MealIngredientCard;
